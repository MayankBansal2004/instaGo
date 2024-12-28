import Home from "./components/Home"
import Account from "./components/account"
import Login from "./components/account/login"
import Signup from "./components/account/signup/Signup"
import AboutUs from "./components/AboutUsPage/AboutUs"
import ContactUs from "./components/ContactUs/ContactUs"
import Landing from "./components/Landing"

const routes = [
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Landing/>
            },
            {
                path: "/About-us",
                element: <AboutUs/>
            },{
                path: "/Contact-us",
                element: <ContactUs/>
            },
            {
                path: "/account",
                element: <Account />,
                children: [
                    {
                        path: "/account/signup",
                        element: <Signup />
                    },{
                        path: "/account/login",
                        element: <Login />
                    }
                ]
            }
        ]
    },
]

export default routes;
