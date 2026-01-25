import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addRecipe({ id: Date.now(), title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter recipe name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
