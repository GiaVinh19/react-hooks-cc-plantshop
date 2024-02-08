function NewPlantForm({onAddPlant, newPlant, onChangeNewPlant}) {

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={event => onAddPlant(event)}>
        <input type="text" name="name" value={newPlant.name} onChange={onChangeNewPlant} placeholder="Plant name" />
        <input type="text" name="image" value={newPlant.image} onChange={onChangeNewPlant} placeholder="Image URL" />
        <input type="number" name="price" value={newPlant.price} onChange={onChangeNewPlant} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
