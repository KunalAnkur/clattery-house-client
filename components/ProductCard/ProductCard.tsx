

export function ProductCard() {
    return (
        <div className="flex flex-col flex-shrink-0 gap-2 xl:flex-row">
            <img className="w-28 object-cover h-28" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&dl=kalen-emsley-Bkci_8qcdvQ-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
            <div className="flex flex-col items-center w-28 gap-2 xl:w-full xl:items-start">
                <h3 className="font-bold text-center xl:text-left">What kind of websit are in hight demand</h3>
                <p className="text-sm text-purple-700 font-bold">Amazon</p>
                <button className="text-purple-700 bg-gray-200 py-1 px-3">Visit site</button>
            </div>
        </div>
    )
}
