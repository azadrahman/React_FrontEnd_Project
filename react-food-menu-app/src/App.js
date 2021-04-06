import React, {useState} from "react";
import "./style.css";
import Category from './Category'
import Menu from './Menu'
import items from './data'

 const allCategory = ['all', ...new Set(items.map((item) => item.category))]

export default function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategory)

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
        <section className="menu section">
            <div className="title">
                <h2>Our Menu</h2>
                <div className="underline"></div>
            </div>
            <Category categories={categories} filterItems={filterItems}/>
            <Menu items={menuItems}/>
        </section>
    </main>
  );
}
