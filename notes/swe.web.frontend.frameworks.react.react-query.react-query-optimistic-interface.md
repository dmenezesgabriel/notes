---
id: 6352sqo0skla6kg3ld5cobq
title: React Query Optimistic Interface
desc: ''
updated: 1736109494434
created: 1736109333421
---

`onMutate` atualiza no momento da mutação, assim aplicando o pattern **optimistic interface**, `onSuccess` ocorre apenas depois que a função é executada com sucesso, no caso a requisição ao backend.

```tsx
const { mutateAsync: updateProfileFn } = useMutation({
  mutationFn: updateProfile,
  onMutate({ name, description }) {
    updateManagedRestaurantCache({ name, description });
  },
});
```
