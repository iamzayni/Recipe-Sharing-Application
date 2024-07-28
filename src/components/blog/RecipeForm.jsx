import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [editing, setEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Please fill in all fields.');
      return;
    }

    if (editing) {
      const updatedRecipes = recipes.map((recipe) => {
        if (recipe.id === editing) {
          return { ...recipe, title, description, image };
        }
        return recipe;
      });
      setRecipes(updatedRecipes);
      setEditing(null);
    } else {
      const newRecipe = { id: uuidv4(), title, description, image };
      setRecipes([...recipes, newRecipe]);
    }
    resetForm();
  };

  const handleEdit = (id) => {
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
      setImage(recipe.image);
      setEditing(id);
    }
  };

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImage(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Recipe Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
          {image && (
            <img src={image} alt="Preview" className="mt-2 w-full h-32 object-cover rounded" />
          )}
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          type="submit"
        >
          {editing ? 'Update Recipe' : 'Upload Recipe'}
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={resetForm}
        >
          Clear
        </button>
      </form>
      <ul className="mt-4">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="py-4 border-b">
            <h3 className="text-2xl font-bold mb-2">{recipe.title}</h3>
            <p className="text-gray-700 text-sm">{recipe.description}</p>
            {recipe.image && (
              <img src={recipe.image} alt={recipe.title} className="mt-2 w-full h-32 object-cover rounded" />
            )}
            <div className="mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={() => handleEdit(recipe.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleDelete(recipe.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeForm;
