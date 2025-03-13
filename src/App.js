import './App.css';
import Login from './pages/login.js'
import Home from './pages/home.js';
import { Suspense, useState, useTransition } from 'react';
import Layout from './Layout';
import Detail from './pages/detail.js';

function App() {
  return (
    <div className="App">
      <Detail d ={'Menu'}/>

      <Suspense fallback={<BigSpinner />}>
            <Router />
      </Suspense>
    </div>
  );
}

function Router() {
  const [page, setPage] = useState('/');
  const [isPending, startTransition] = useTransition();

  function navigate(url) {
    console.log(url);
    startTransition(() => {
      setPage(url);
    });
  }

  let content;
  if (page === '/') {
    content = (
      <Login navigated={navigate} />
    );
  } else if (page === '/home') {
    content = (
      <Home navigated={navigate} />
    );
  }
  else if(page === '/Stores'|| page ==='/Menu'||page==='/Cart'){
    content=(
      <Detail/>
    )

  }
  return (
    <Layout isPending={isPending}>
      {content}
    </Layout>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}


export default App;
