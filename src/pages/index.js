import React from "react"
import Layout from '../components/Layout'
import Header from '../components/Header'
import CurrentStatus from "../components/CurrentStatus"
import Socials from "../components/Socials"
import Footer from "../components/Footer"
import { theme, GlobalStyle } from "../theme"

export default () => (
    <div class="container">
    <Layout>
        <Header />
        <CurrentStatus />
        <Socials />
        <Footer />
    </Layout>
    </div>
)
