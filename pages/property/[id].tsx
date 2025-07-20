import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import type { PropertyProps } from "@/interfaces";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id || Array.isArray(id)) return;
    const fetchProperty = async () => {
      try {
        const response = await axios.get<PropertyProps>(`/api/properties/${id}`);
        setProperty(response.data);
      } catch {
        setError("Could not load property");
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading property details…</p>;
  if (error || !property) return <p>{error || "Property not found"}</p>;

  return <PropertyDetail property={property} />;
}