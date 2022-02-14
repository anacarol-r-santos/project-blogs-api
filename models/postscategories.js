module.exports = (sequelize) => {
  const PostCategorie = sequelize.define('Postcategorie', { 
  }, { timestamps: false, tableName: 'PostCategories' });
  PostCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategorie;
};