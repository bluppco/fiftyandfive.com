export const contactAPI = async ( ENVIRONMENT, ENDPOINT ) => {

    // NETWORK CALL TO GET ABOUT DATA
    const network_data = await fetch( ENDPOINT + "/page/contact" )
    const data_json = await network_data.json()

    const contact = data_json.data.page

    return { contact }

}
