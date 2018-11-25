class CreateCommands < ActiveRecord::Migration[5.2]
  def change
    create_table :commands do |t|
      t.string :name
      t.text :description
      t.string :command

      t.references :user, null: true
      t.references :flow, null: true

      t.timestamps
    end
  end
end
