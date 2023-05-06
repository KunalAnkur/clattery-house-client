export const dataToString = (time: string) : string => {
    return( 
        new Date(time).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    )
}