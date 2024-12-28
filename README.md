# Agenda Medica
Proyecto desarrollado siguiendo el curso de NextJS de Fernando Herrera. La idea nace de un proyecto que realicé hace un año durante el segundo semestre de mi carrera en colaboración con algunos compañeros: [reservatumed](https://github.com/vcntttt/citas-medicas-react). Dicho proyecto estaba construido con React, y en esta ocasión decidí rehacerlo por mi cuenta aplicando los conocimientos adquiridos recientemente en Next.js y otras tecnologías actuales.

El propósito principal de este proyecto es mejorar la idea original tanto en diseño como en funcionalidad, pero también dejarlo listo para producción. Esto surge porque el proyecto original no quedó bien documentado ni configurado para reproducirse fácilmente, lo que hace imposible mostrarlo actualmente. Esta vez, mi meta es construir una versión funcional y estable que pueda desplegarse y mantenerse en producción de forma sencilla.

# Desarrollo

1. Levantar base de datos

```bash
docker-compose up -d
```

2. Renombrar .env.template -> .env
```bash
mv .env.template .env
```
3. Reemplazar correctamente variables de entorno

4. Instalar dependencias
5. Levantar entorno de desarrollo y bajarlo

6. Prisma
```bash
bunx prisma migrate dev
bunx prisma generate
```
7. Ejecutar [seed](http://localhost:3000/api/seed).
