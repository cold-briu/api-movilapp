# MovilApp API 🔥
 
## Usuarios 😎

### 1. En la ruta '/' 

- **GET:**  Devuelve todos los usuarios de la base de datos. (Método getAll de mongoLib)


- **POST:** Registra un nuevo usuario (Método create de mongoLib)


    **Debe seguir la siguiente estructura:**
        
        {
            name: str,
            lastname: str,
            email: str,
            password: str
        }




### 2. En la ruta '/ :id'  

    utiliza el mongo doc _id

- **GET :** Devuelve un user con la id indicada 

- **PUT :** Actualiza un user con la id indicada 

- **DELETE:** Elimina un user con la id indicada 


### 3. En la ruta '/login'  

- **POST:** Verifica si existe user by email y compara passwords

  **Debe seguir la siguiente estructura:**
        
        {
            email: str,
            password: str
        }




___

## Publicaciones 🦁

### 1. En la ruta '/' 
- **GET:**  Devuelve todas las publicaciones de la base de datos. (Método getAll de mongoLib)


- **POST:** Crea una publicaciones (Método create de mongoLib)


    **Debe seguir la siguiente estructura:**
        
        {
            uid: str,
            titulo: str,
            ubicacion: str,
            texto: str,
            foto: str, (url)
            likes: int, 
            esQueja: bool, 
            entidades: arr,
            categorias: arr,
            comentarios: arr, debería usar populate

        }




### 2. En la ruta '/ :id'  

    utiliza el mongo doc _id

- **GET :** Devuelve una publicacion con la id indicada 

- **PUT :** Actualiza una publicacion con la id indicada 

- **DELETE:** Elimina una publicacionuser con la id indicada 

**FALTA VALIDAR ADD MANY, FALTA GET POST BY UID DEFAULT NO FUNCIONA**

### 3. En la ruta '/getByUserId/:id'

    utiliza el uid

- **GET :** Devuelve las publicaciones con el uid indicado 

**FALTA VALIDAR ADD MANY, DEFAULT NO FUNCIONA**


___

## Comentarios ☀️

### 1. En la ruta '/' 
- **GET:**  Devuelve todos los comentarios de la base de datos. (Método getAll de mongoLib)


- **POST:** Crea un comentario (Método create de mongoLib)


    **Debe seguir la siguiente estructura:**
        
        {
            uid: str,
            postid: str,
            titulo: str,
            ubicacion: str,
            texto: str,
            foto: str, (url)
            likes: int

        }




### 2. En la ruta '/ :id'  

    utiliza el mongo doc _id

- **GET :** Devuelve un comentario con la id indicada 

- **PUT :** Actualiza comentario con la id indicada 

- **DELETE:** Elimina comentario con la id indicada 

**FALTA VALIDAR ADD MANY, DEFAULT NO FUNCIONA**


### 3. En la ruta '/getByPostId/:id'

    utiliza el postid (doc _id de una publicacion)

- **GET :** Devuelve los comentarios con el postid indicado 

**FALTA VALIDAR ADD MANY, DEFAULT NO FUNCIONA**

