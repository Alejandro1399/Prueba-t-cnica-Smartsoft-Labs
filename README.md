# Prueba técnica Smartsoft Labs

Para el desarrollo de esta prueba tecnica se utlizo los paquetes inquierer, colors, csvtojson; esto con el fin de mostrar un resultado mas dinamico en pantalla. 

Con la libreria cvstojson nos apoyamos para asi leer el cvs y tener los datos en forma de objeto y asi poder manejarlos de una forma mas simples con metodos de arreglos entre otros. 

Luego de tener los datos como json procedemos hacer 3 arrays de objetos en los cuales estarian todos los datos ordenados al gusto, en la otra solo el nombre del estado y en la otra el acumulado de poblacion y muertes por estado

---

## Primera pregunta

Teniendo los 3 arreglos mencionados anteriormente se procede a realizar un array del acumulado de muertes para asi poder buscar con el metodo `filter()` y el metdo `Math.max.apply()` cual es el que tiene mayor acumulado entre todos los estados

---

## Segunda pregunta

Teniendo los 3 arreglos mencionados anteriormente se procede a realizar un array del acumulado de muertes para asi poder buscar con el metodo `filter()` y el metdo `Math.min.apply()` cual es el que tiene menor acumulado entre todos los estados

---

## Tercera pregunta


Para resolver esta pregunta lo que se realizo fue una regla de 3 en la cual 

$$
Poblacion = 100\%  \\
Acumulado = X
$$

y se lleno los resulatdos en un array para luego mostrarlos en pantalla

---

## Cuarta pregunta

Para resolver esta pregunta lo que se hizo fue analizar cual fue el estado que mayor numero de muertes habia tenido dado que al punto de vista esto es lo que determina el estado mas afectado