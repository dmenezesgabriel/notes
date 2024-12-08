---
id: y4olesvojqr2ovza93uliyo
title: TypeScript Extend Props
desc: ""
updated: 1733670393481
created: 1733670291262
---

```tsx
import { ComponentProps } from "react";

interface AvatarProps extends ComponentProps<"img"> {
  src: string;
}

export function Avatar({ src, ...props }: AvatarProps) {
  return <img src={src} {...props} />;
}
```

#SWE #FrontendWebFrameworks #ReactTypescript
