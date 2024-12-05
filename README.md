# Calculadora de la Ley de los Gases Ideales

Este repositorio contiene una calculadora web para resolver propiedades termodinámicas básicas utilizando la Ley de los Gases Ideales:

$$PV=nRT$$

La calculadora permite calcular una propiedad faltante—Presión (P), Volumen (V), Temperatura (T) o Cantidad de moles (n)—dadas las otras tres. Además, soporta conversiones entre diferentes unidades para cada propiedad.

## Código clave del proyecto

En los siguientes archivos se encuentra el código central del proyecto:

 - [src/conversions.tsx](src/conversions.tsx): Maneja la conversión entre unidades.
 - [src/solutions.tsx](src/solutions.tsx): Contiene la solución de la ecuación de gases ideales según cada propiedad faltante.
 - [src/Calculator.tsx](src/Calculator.tsx): Contiene el código necesario para mostrar la calculadora.

## Características
 - **Cálculo de Propiedades**: Calcula la variable faltante usando la Ley de los Gases Ideales.
 - **Conversiones de Unidades**: Compatible con múltiples unidades para presión, volumen y temperatura.
 - **Entrada en Tiempo Real**: Realiza cálculos en tiempo real a medida que el usuario escribe, con entradas debounced para mejor rendimiento.
 - **Interfaz gráfica**: Construida con React y estilizada con Tailwind CSS para un diseño limpio y responsivo.

## Objetivos del Proyecto

Este proyecto cumple con los requerimientos del trabajo final de promoción de termodinámica: _**Trabajo 1**: Cálculo de Propiedades Termodinámicas Básicas_, que incluye:

 - Permitir al usuario ingresar valores para tres variables y calcular la cuarta.
 - Ofrecer opciones de conversión de unidades y realizar las transformaciones necesarias.

Conceptos Cubiertos:
 - Ecuación de los Gases Ideales.
 - Conversión de unidades.
 - Manejo de constantes físicas en cálculos.

Tecnologías Utilizadas
 - React: Framework para el frontend.
 - Vite: Herramienta de construcción rápida.
 - Deno: Entorno de ejecución para TypeScript y JavaScript.
 - Tailwind CSS: Framework CSS basado en utilidades.
 - TypeScript: Para mayor seguridad de tipos y mejor experiencia de desarrollo.

## Acceder online

Se puede acceder a la calculadora en [https://grossodev.github.io/ideal-gas-equation](https://grossodev.github.io/ideal-gas-equation)

## Uso
1. Selecciona la variable que deseas calcular (P, V, T o n) en el menú desplegable Calcular.
2. Ingresa los valores para las otras tres propiedades.
3. Elige las unidades para cada propiedad en los menús desplegables correspondientes.
4. El resultado aparecerá en el campo deshabilitado para la propiedad seleccionada.

## Unidades Compatibles
### Presión
 - Pascales (Pa)
 - Hectopascales (hPa)
 - Bares (bar)
 - Atmósferas (atm)
 - PSI (Libras por pulgada cuadrada)
 - Milímetros de Mercurio (mmHg)

### Volumen
 - Litros (L)
 - Metros Cúbicos (m³)

### Temperatura
 - Kelvin (K)
 - Celsius (°C)
 - Fahrenheit (°F)

## Ejemplo
### Entradas:
    Presión (P): 22.45 atm
    Volumen (V): 1 L
    Temperatura (T): 273 K
    Calcular: Cantidad de moles

### Salida:
    n ≈ 1.00 mol

## Ejecución local

### Instalar Deno (si no lo tenés instalado)
Seguí las instrucciones en [deno.land](deno.land).

### Clonar el Repositorio:
```
git clone https://github.com/GrossoDev/ideal-gas-equation.git
cd ideal-gas-equation
```

### Instalar Dependencias

Ejecuta el siguiente comando para instalar las dependencias:
```
deno task install
```

### Iniciar el Servidor de Desarrollo
```
deno task dev
```

### Abrir en el Navegador
Visita [http://localhost:5173/ideal-gas-equation/](http://localhost:5173/ideal-gas-equation/) para usar la calculadora.

## Autor
Giuliano Rosso, 2024
