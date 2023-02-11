function restaurantSearch(text, restaurant) {
    let data = restaurant.filter((item) => {
        return item?.data?.name?.toLowerCase()?.includes(text?.toLowerCase())
    })
    return data
}
export default restaurantSearch;