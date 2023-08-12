export const data = [
    {
        "id": 1,
        "question": "1. ¿Cuál de los siguientes métodos se utiliza para agregar un elemento al final de un array en JavaScript?",
        "options": [
            "array.push()",
            "array.unshift()",
            "array.pop()"
        ]
    },
    {
        "id": 2,
        "question": "2. ¿Cuál de las siguientes opciones NO se utiliza para iterar sobre propiedades de un objeto en JavaScript?",
        "options": [
            "for...in",
            "for...of",
            "forEach"
        ]
    },
    {
        "id": 3,
        "question": "3. ¿Cuál es la diferencia entre null y undefined en JavaScript?",
        "options": [
            "null indica una variable que ha sido declarada pero no inicializada, mientras que undefined representa la ausencia de un valor asignado.",
            "null representa la ausencia de un valor asignado, mientras que undefined indica una variable que ha sido declarada pero no inicializada.",
            "null y undefined son intercambiables y se utilizan indistintamente en JavaScript"
        ]
    },
    {
        "id": 4,
        "question": "4. ¿Qué devuelve el método toString()?",
        "options": [
            "Devuelve un Objeto",
            "Devuelve una Cadena de Texto",
            "Devuelve un Entero"
        ]
    },
    {
        "id": 5,
        "question": "5. ¿Como instancia Javascript los objetos?",
        "options": [
            "Creándolo a partir de una clase con el operador New",
            "Dándole algún valor al objeto",
            "Javascript no instancia objetos porque no existen las clases"
        ]
    },
    {
        "id": 6,
        "question": "6. ¿Qué es una promesa en JavaScript?",
        "options": [
            "Una estrategia para anidar objetos JSON de manera eficiente.",
            "Un constructo que modela un valor futuro, que puede estar disponible con éxito o fracaso.",
            "Un método para invocar funciones asíncronas en elementos HTML."
        ]
    },
    {
        "id": 7,
        "question": "7. Si tengo el objeto cuadrado = {lado: 5, area: function(){return this.lado*this.lado}} ¿Que es this?",
        "options": [
            "Es una variable global de javascript.",
            "Es una propiedad del objeto cuadrado.",
            "Es el propio objeto cuadrado."
        ]
    },
    {
        "id": 8,
        "question": "8. ¿Cuáles son los beneficios de utilizar el patrón de diseño 'Redux' en una aplicación JavaScript?",
        "options": [
            "Centraliza el estado de la aplicación en un solo almacén y facilita la gestión del flujo de datos.",
            " Agiliza el proceso de compilación y empaquetado de recursos.",
            "Mejora el rendimiento de las consultas de base de datos en aplicaciones con una gran cantidad de datos."
        ]
    },
    {
        "id": 9,
        "question": "9. ¿Cuándo podrías preferir utilizar WebSockets en lugar de hacer solicitudes HTTP tradicionales en una aplicación web?",
        "options": [
            "Cuando deseas que las solicitudes se realicen de manera síncrona para un mejor seguimiento de los errores.",
            "Cuando deseas cachear datos estáticos para una carga más rápida.",
            "Cuando deseas comunicación bidireccional en tiempo real entre el cliente y el servidor."
        ]
    },
    {
        "id": 10,
        "question": "10. ¿Cuál es la diferencia fundamental entre el operador async/await y el uso de promesas en JavaScript?",
        "options": [
            "Las promesas son bloqueantes, mientras que 'async/await' permite operaciones verdaderamente asíncronas.",
            "'async/await' permite escribir código asíncrono de manera más similar a código síncrono, mientras que las promesas utilizan el método then() para manejar la asincronía.",
            "'async/await' solo se puede usar en el lado del cliente, mientras que las promesas son más versátiles en el servidor."
        ]
    },
    {
        "id": 11,
        "question": "11. En el contexto de JavaScript, ¿qué es el patrón de diseño 'Module Pattern'",
        "options": [
            "Una forma de encapsular datos y funcionalidades en un solo objeto que retorna un closure.",
            "Un método para optimizar el rendimiento de bucles en iteraciones intensivas.",
            "Un enfoque para estructurar promesas encadenadas en tareas asíncronas complejas."
        ]
    },
    {
        "id": 12,
        "question": "12. ¿Qué es el 'hoisting' en JavaScript y cómo afecta la ejecución del código?",
        "options": [
            "El 'hoisting' es un comportamiento que permite a las variables y funciones ser utilizadas antes de ser declaradas en el código. Las declaraciones se elevan al principio del ámbito, pero las asignaciones no.",
            "El 'hoisting' es una técnica avanzada para mejorar el rendimiento de las aplicaciones en navegadores antiguos, especialmente en dispositivos móviles.",
            "El 'hoisting' es una optimización que permite a las variables globales ser referenciadas en cualquier ámbito del programa, incluso si no están declaradas en ese ámbito específico."
        ]
    }
]

export const answers = [0, 1, 1, 1, 0, 1, 2, 0, 2, 1, 0, 0]