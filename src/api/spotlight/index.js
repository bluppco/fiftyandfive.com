export const spotlightAPI = async ( ENVIRONMENT, ENDPOINT ) => {

    // NETWORK CALL TO GET ABOUT DATA
    const network_data = await fetch( ENDPOINT + "/page/spotlight" )
    const data_json = await network_data.json()

    const spotlight = data_json.data.page

    return { spotlight }

}
