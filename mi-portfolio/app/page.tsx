import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Lucas del Valle</h1>
        <p className="text-lg text-gray-600">Desarrollador Full Stack | Java · React · SQL</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Sistema de Reservas - Hotel Andino</h2>
            <p className="text-gray-600">Sistema para gestionar reservas y habitaciones, hecho con Java y MySQL.</p>
            <a href="#" className="text-blue-500 underline text-sm mt-2 inline-block">Ver en GitHub</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Gestión de Stock - Autopartes</h2>
            <p className="text-gray-600">Aplicación para automatizar pedidos de repuestos en base a consumo histórico.</p>
            <a href="#" className="text-blue-500 underline text-sm mt-2 inline-block">Ver en GitHub</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Control de Canchas y Socios</h2>
            <p className="text-gray-600">App para administrar alquileres y socios de un club de fútbol 5.</p>
            <a href="#" className="text-blue-500 underline text-sm mt-2 inline-block">Ver en GitHub</a>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-600 mb-2">lucas@example.com</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Descargar CV</Button>
      </section>
    </main>
  );
}

