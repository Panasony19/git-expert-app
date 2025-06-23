import { useState } from 'react';
import AddCategory from './components/AddCategory.jsx';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }  

  return (
    <>  
        <h1>GifExpertApp</h1>
        <AddCategory />

        <ol>
          {
            categories.map(category => (
              <li key={category}>{category}</li>
            ))
          }
        </ol>
    </>
  )
}
