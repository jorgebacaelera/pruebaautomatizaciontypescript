Feature: Login en Netflix y obtener títulos

  Scenario: Usuario inicia sesión y captura títulos
    Given que el usuario abre la página de Netflix
    When ingresa sus credenciales válidas
    Then toma captura de la página de inicio y muestra títulos de una sección
