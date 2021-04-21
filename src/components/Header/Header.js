import './Header.css';

function Header(props) {

    function renderHeader() {
        if(props.loggedIn !== true) {
            return(
                <header>
                    <h1>
                        H1 HERE
                    </h1>
                    <h2>
                        TAGLINE HERE
                    </h2>
                    <button>
                        Log In
                    </button>
                    <button>
                        Sign Up
                    </button>
                </header>
            );
        } else {
            return(
                <header>
                    <h1>
                        H1 HERE
                    </h1>
                    <h2>
                        TAGLINE HERE
                    </h2>
                    <div>
                        PROFILE
                    </div>
                    <button>
                        Log Out
                    </button>
                </header>
            );
        };
    };

    return(
        renderHeader()
    );
};

export default Header;