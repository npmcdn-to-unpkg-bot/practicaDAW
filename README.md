# practicaDAW
Nombre de la aplicación: UGym

Descripción: La aplicación web consiste en un gimnasio en el cual se muestra diferente información como precios, ofertas, instalaciones,              ubicación,etc.
             Desde la misma pagina web se pueden registrar clientes, los cuales tienen acceso a la reserva de clases colectivas y a la                compra de diferentes tipos de entrenamiento, dietas, productos, gestión de ficha técnica, etc. 
             La parte pública de la aplicación consiste en lo mencionado anteriormente, siendo la parte privada un módulo solo accesible              mediante cuenta de usuario y contraseña en el cual se puede gestionar los entrenamientos disponibles y demás servicios                   ofertados.  
             
Entidades: 
          -Usuario: contiene datos obtenidos tras el registro tales como nombre, apellidos, fecha de nacimiento, etc.
          -Tarifa: entidad asociada a cada usuario. 
          -Clases colectivas: contiene los diferentes tipos de clases ofertadas.
          -Productos: los usuarios pueden adquirir cualquiera de los diferentes tipos de productos ofertados, caracterizados por un                 nombre, descripción y precio.
          -Inscripción: formulario en el cual se han de introducir una serie de datos para poder ser usuario del gimnasio.
          
Equipo de desarrollo:
                      Blanca Romero Rico (b.romerori@alumnos.urjc.es) (bromerori)
                      María Ballesteros López (m.ballesteroslo@alumnos.urjc.es) (mariablopez)
                      Héctor Domínguez Diego (h.dominguezd@alumnos.urjc.es) (HDominguezD)
                      Jesús Amores Fernández-Caballero (j.amoresf@alumnos.urjc.es) (jesusAmores)

Fase 2

Nota: los pasos a continuación detallados han sido probados en terminales con sistema operativo Windows.

- Software necesario para ejecutar esta fase: Brackets.

- Pasos a seguir para ejecutar la fase 2:
  
  1º Acceder al siguiente repositorio (https://github.com/jesusAmores/practicaDAW.git).
  2º Pulsar el botón "download Zip" para descargarnos los archivos fuente.
  3º Descomprimir el .zip en el directorio deseado.
  4º Abrir brackets, seleccionar la carpeta con los archivos y ejecutar.

- Explicación y uso de las pantallas

  - Página principal (index.html y style.css): 
    Estos archivos hacen referencia a la página principal, la cuál será la primera página que el usuario vea al entrar en la web.
    Gracias a esta página el usuario podrá realizar numerosas funciones como conocer las actividades, instalaciones y tarifas de          nuestro gimnasio entre otras cosas.
    Este módulo dispone de un menú horizontal con enlaces a las secciones de "actividades", "instalaciones", "tarifas" y "galería",      además de dos botones: uno para iniciar sesión, donde se abrirá un formulario (donde deberemos introducir nuestro ID y nuestra     contraseña) así como un enlace a una página de recuperación de datos a la que deberemos acceder en el caso de que hallamos olvidado nuestro ID o nuestra contraseña introduciendo el email que tengamos asociado a nuestra cuenta, y otro que nos explica las numerosas ventajas de hacernos socios.
    La sección de actividades contiene la explicación de 4 tipos de actividades (Fitness, pilates, spinning y zumba).
    La sección de instalaciones contiene un menú de navegación por las tres partes del gimnasio mas importantes (zona de máquinas,        piscina y sauna) con una pequeña descripción y una imagen de cada una de ellas.
    En la sección de tarifas podemos encontrar diferentes formas de contacto y la dirección del gimnasio.
    Y en la sección de galería encontraremos un carousel de diferentes fotos del gimnasio y sus usuarios.

  - Área clientes (client.html y client.css):
    Estos archivos hacen referencia al módulo área clientes en el cual los usuarios del gimnasio acceden para hacer reservas de clases     colectivas, comprar artículos y ver y modificar sus datos personales. En la parte superior, hay un botón de cierre de sesión que      nos devuelve a la página principal de la aplicación.
    Este módulo posee una barra de navegación con 3 pestañas que hacen referencia a las ventanas de reserva de clases colectivas, la      tienda y la ventana de datos personales.
    La ventana Clases colectivas posee una tabla de horarios en la que cada recuadro indica la clase colectiva y la ocupación.
    La ventana Tienda tiene a su vez un menú de navegación con tres opciones que hacen referencia a un tipo concreto de artículo. Esta     ventana posee un botón llamado "carrito de compra" cuya función es listar los elementos que el usuario añade al carrito.
    En la ventana Mi ficha aparece un formulario con campos modificables y algunos bloqueados. Aquí podemos cambiar de contraseña,        cambiar nuestra tarifa o desapuntarnos del gimnasio.

  - Área registro de clientes (registroCliente.html):
    Este archivo hace refencia a la parte de resgistro del cliente. Hemos considerado que esta sección deberá estar incluida en la        parte privada de la página web porque ser socio de un gimnasio tiene un coste y los trámites deberán hacerse en presencia del         futuro cliente para evitar futuros problemas. Además, solo podrán acceder a rellenar las fichas los miembros del equipo de gestión     del gimnasio. En la ficha de registro se deben rellenar los campos: nombre, primer y segundo apellido, DNI, EMAIL, dirección          (donde se debe elegir el tipo de vía donde vive el cliente), un número de teléfono, fecha de nacimiento y sexo del cliente. Tras      rellenar todos los campos, la persona que se ha encargado de rellenar la ficha deberá pulsar sobre el botón "Enviar" y la             información sera enviada a la base de datos de los clientes. 

  -Área para añadir productos a la tienda (añadirArticulosTienda.html):
  Este archivo hace refencia a la parte que se usa para poder añadir artículos a la tienda. También estará incluida en la parte         privada en la parte privada de la página web, ya que solo podrán incluir prodcutor los miembros del gimnasio que trabajen en las      secciones de administración o gestión. En la ficha que se ha de rellenar para incluir un nuevo producto, aparecen los siguientes      campos: nombre del producto,breve descripción del producto, tipo del producto(se eligirá entre producto en general,prodcutos de       entrenamiento o productos de dieta), precio del prodcuto y una imagen (que estará guardada en alguna carpeta del sistema y            simplemente habrá que copiar la ruta de dicha imagen y pulsar sobre el botón "Cargar imagen" y automáticamente ésta se cargará).      Tras rellenar todos estos campos, el tranajador encargado de rellenar esta ficha, pulsará sobre el botón "Incluir en la tienda", y    el producto formará parte de la base de datos de productos.
  
  
  
  
  
  
  
  
  
  
  
