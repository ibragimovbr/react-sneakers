import React from "react";
import Card from "../components/Card/Card.js";
import AppContext from "../Context.js";

function Favorites() {
   const { favorites, onAddToFavorite } = React.useContext(AppContext);

   return (
      <div className="content p-40">
         <div className="d-flex align-center justify-between mb-40">
            <h1>Мои закладки</h1>
         </div>

         <div className="d-flex flex-wrap">
            {favorites.map((item) => (
               <Card
                  key={item.id}
                  favorited={true}
                  onFavorite={onAddToFavorite}
                  {...item}
               />
            ))}
         </div>
      </div>
   );
}
export default Favorites;
