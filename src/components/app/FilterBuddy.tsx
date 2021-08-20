import React, { useState } from 'react';
import RecipeData from '../data/data';


const FilterBuddy = ()=>{
    const [filterView, setfilterView] = useState(RecipeData);
    const [serachTerm, setSearchTerm] = useState('');
    
    const editSearch = (e:string)=>{
        setSearchTerm(e)
    }

    const dynamicSearch = ()=>{
        return filterView.filter((name)=> name.recipeTitle.toLocaleLowerCase().includes(serachTerm.toLocaleLowerCase()))
    }
    return(

        <div className="searchable">
            <input type="text" value={serachTerm} onChange={(e)=>editSearch(e.currentTarget.value)} placeholder="Search for Recipe"/>
           
               <div className="dataList">
                   {dynamicSearch().map((x)=>(
                       <div className="dataItem">
                           {x.recipeTitle}
                        

                           </div>
                   ))}
               </div>
        </div>

    )
}

export default FilterBuddy;