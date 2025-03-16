import { Figure } from 'react-bootstrap';
import './home.css';
import { Link } from "react-router-dom";

function Home(){
    return (
        <div className = 'homeTodo'>
            <div className = 'container-home'>
                <div className='menu'>
                    <Link to = '/menu'>
                        <button>
                            <Figure>
                                <img src="./menu.png"
                                 alt="menu"
                                 width={150}/>
                            </Figure>
                            MENU
                        </button>
                    </Link>
                </div>
                <div className='stores'>
                    <Link to = '/store'>
                        
                        <button >
                            <Figure>
                                <img src="./store.png"
                                 alt="store"
                                 width={150}/>
                            </Figure>
                            STORES
                        </button>
                    </Link>
                </div>
                <div className='cart'>
                    <Link to = '/cart'>
                        <button >
                            <Figure>
                                <img src="./cart.png"
                                 alt="cart"
                                 width={150}/>
                            </Figure>
                            CART
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
export default Home;