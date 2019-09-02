 # create User model
 # also generates migration file for user table
 node_modules/.bin/sequelize model:create --name user --attributes email:string
 node_modules/.bin/sequelize model:create --name author --attributes firstName:string,lastName:string
 node_modules/.bin/sequelize model:create --name post --attributes title:string,content:text

# models created manually can create migration file with sequelize-cli
sequelize migration:generate --name [name_of_your_migration]

# migrate database
node_modules/.bin/sequelize db:migrate
