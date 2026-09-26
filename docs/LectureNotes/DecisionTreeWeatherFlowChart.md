#### Decision Trees

```mermaid
flowchart TD
    A[What's the weather like?]
    B{Sunny}
    C{Raining}
    D{Cloudy}
    E[Is it warm?]
    F{Yes}
    G{No}
    H[Go Play]
    I[Stay In]
    A --> B
    A --> C
    A --> D
    B --> H
    C --> I
    D --> E
    E --> F
    E --> G
    F --> H
    G --> I

```

