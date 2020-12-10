import './App.css';
import {Route} from 'react-router';
import {Home} from "./Home";
import {Test} from "./Test";

function App() {
    return (
        <div>
            <Route path="/vis" component={Test}/>
            <Route exact path="/" component={Home}/>
        </div>
    );
}

export default App;
