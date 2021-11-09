Feature: Registro en la plataforma

Scenario: El estudiante desea crear una cuenta nueva

Given El estudiante desea crear una cuenta nueva
When le dé click al botón de registro de estudiantes
And elija una opción de registro
And llene sus datos
Then se mostrará un cuadro que dirá “Registro con éxito”
