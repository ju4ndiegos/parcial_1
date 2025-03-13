function Home(navigate){
    return (
        <>
        <button onClick={()=>navigate('/Menu')}>Menu</button>
        <button onClick={()=>navigate('/Stores')}>Stores</button>
        <button onClick={()=>navigate('/Cart')}>Cart</button>
        </>
    );
}
export default Home;