<h1>Audio player with graphql and node.js</h1>

UI uninplemented! you can use graphiql though.

The graphql schema is stored in store/schema.gql

Usage:

+In order to run this on your computer, you have to modify store/config.json and insert your desired folder in the tracksDir field.<br>
+Folder's structure should be like this:<br>
Music<br>
|----artist number one (folder)<br>
|----|----album number one (folder)<br>
|----|----|----song number one (track)<br>
|----|----|----song number two (track)<br>
|----|----|----song number three (track)<br>
|----|----album number two (folder)<br>
|----|----|----song number one (track)<br>
|----|----|----song number two (track)<br>
|----|----|----song number three (track)<br>
|----|----single number one (track)<br>
|----|----single number two (track)<br>
|----|----single number three (track)<br>
|----artist number two(folder)<br>
|----|----album number one (folder)<br>
|----|----|----song number one (track)<br>
|----|----|----song number two (track)<br>
|----|----|----song number three (track)<br>
|----|----album number two (folder)<br>
|----|----|----song number one (track)<br>
|----|----|----song number two (track)<br>
|----|----|----song number three (track)<br>
|----|----single number one (track)<br>
|----|----single number two (track)<br>
|----|----single number three (track)<br>