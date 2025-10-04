import { useEffect, useState } from "react";

const useRestaurantMenu = (restaurantId) => {
    const [menu, setMenu] = useState({});
    useEffect(() => {fetchMenu()}, [restaurantId]);

    const fetchMenu = async () => {
            const resId = Number(restaurantId) + 1;
            const data = await fetch(`http://localhost:8080/api/restaurant/${resId}`);
            const json = await data.json();
            console.log(json);
            setMenu(json);
        };
    return menu;
};

export default useRestaurantMenu;