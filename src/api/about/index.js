export const aboutAPI = async ( ENVIRONMENT, ENDPOINT ) => {

    // NETWORK CALL TO GET ABOUT DATA
    const network_data = await fetch( ENDPOINT + "/about" )
    const data_json = await network_data.json()

    // NETWORK CALL TO GET ABOUT PAGE DATA
    const page_network_data = await fetch( ENDPOINT + "/page/about" )
    const page_data_json = await page_network_data.json()

    // NETWORK CALL TO GET PORTFOLIO PAGE DATA
    const portfolio_network_data = await fetch( ENDPOINT + "/page/portfolio" )
    const portfolio_data_json = await portfolio_network_data.json()

    const { about, meta } = data_json.data
    const { page } = page_data_json.data
    const portfolio = portfolio_data_json.data.page

    return { about, page, portfolio, meta }

}
