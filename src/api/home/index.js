export const homeAPI = async ( ENVIRONMENT, ENDPOINT ) => {

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( ENDPOINT + "/home" )
    const data_json = await network_data.json()

    const { home, about, pages, meta } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        work : ""

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "work" )
            home_data.work = data

    })

    return { home_data, about, pages, meta }

}
