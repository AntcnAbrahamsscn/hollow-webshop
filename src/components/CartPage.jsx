import { useStore } from "../data/store";
import Header from "./Header";
import "../stylesheets/cart-page.css";

function Cart() {
    const { cart, deleteFromCart, addToCart } = useStore();
    const cartItemsWithDuplicates = cart.reduce((duplicate, item) => {
        const existingItem = duplicate.find((i) => i.name === item.name);
        if (existingItem) {
            existingItem.count++;
        } else {
            duplicate.push({ ...item, count: 1 });
        }
        return duplicate;
    }, []);

    const handleDelete = (itemId) => {
        deleteFromCart(itemId);
    };

    const totalSum = cartItemsWithDuplicates.reduce((sum, item) => {
        return sum + item.price * item.count;
    }, 0);

    return (
        <div>
            <Header />
            <div id="cart">
                <h2>
                    {cartItemsWithDuplicates.length > 0
                        ? "Your cart"
                        : "Your cart is empty"}
                </h2>{" "}
                {cartItemsWithDuplicates.map((item) => {
                    const totalPrice = item.price * item.count;
                    return (
                        <div className="orderContainer">
                            <div
                                className="orderItem"
                                style={{ marginBottom: "2em" }}
                            >
                                <div key={item.id} className="orderContent">
                                    <h4>{item.name}</h4>
                                    <p style={{textWrap: "wrap"}}> {item.description}</p>
                                    <p style={{ marginTop: "1em" }}>
                                        Price: {totalPrice} £
                                    </p>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "1em",
                                            marginTop: "1em",
                                            alignItems: "center",
                                            width: "160px",
                                            justifyContent: "space-between",
                                            backgroundColor:
                                                "var(--color-background)",
                                            borderRadius: "50px",
                                        }}
                                    >
                                        <button
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                        >
                                            <i class="fa-solid fa-minus"></i>{" "}
                                        </button>
                                        <p
                                            style={{
                                                color: "var(--secondary-text-color)",
                                            }}
                                        >
                                            {item.count}
                                        </p>
                                        <button
                                            onClick={() => addToCart(item, 1)}
                                        >
                                            <i class="fa-solid fa-plus"></i>{" "}
                                        </button>
                                    </div>
                                </div>

                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    );
                })}
                <div className="checkoutContainer">
                    <h3>Total sum: {totalSum} £ </h3>
                    <button>Check out</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
