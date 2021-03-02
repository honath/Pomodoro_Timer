# Pomodoro Timer

The *Pomodoro technique* is a time-management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer that Cirillo used as a university student.

## About

Control state and component display to provide a quality experience and an accurate, reliable Pomodoro timer. 

## Tools

- Installing packages with NPM
- React function components
- Hooks useState() and useInterval()
- Mocha
- Chai
- Bootstrap v4.5

## Structure

- index.js
    - App.js
        - Pomodoro "./pomodoro/Pomodoro.js" (Stateful)
            - InitialState "./pomodoro/InitialState.js" (Stateless)
            - ActiveState "./pomodoro/ActiveState.js" (Stateful)
                - BreakCheck "./pomodoro/BreakCheck.js" (Stateless)
                - PauseCheck "./pomodoro/PauseCheck.js" (Stateless)