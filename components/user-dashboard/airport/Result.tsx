"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// Define the TypeScript interfaces for flight data
interface FlightSegment {
  departure: { at: string };
  arrival: { at: string };
}

interface Itinerary {
  segments: FlightSegment[];
}

interface Flight {
  price: { total: string };
  validatingAirlineCodes?: string[];
  itineraries: Itinerary[];
}

interface FlightResults {
  data: Flight[];
}

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: FlightResults | null; // Handle the case when results may be null
}

export default function ResultModal({
  isOpen,
  onClose,
  results,
}: ResultModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-30">
          <Dialog.Panel className="bg-white rounded-lg shadow-2xl w-full max-w-4xl p-6 py-10 relative">
            <Dialog.Title className="text-xl text-[#2C2C2C] font-semibold">
              Flight Search Results
            </Dialog.Title>

            <div className="mt-4 max-h-96 overflow-y-auto">
              {results?.data?.length ? (
                results.data.map((flight, index) => (
                  <div key={index} className="border-b p-3">
                    <p className="text-gray-700 font-medium">
                      <strong>Price:</strong> ${flight.price.total}
                    </p>
                    <p className="text-gray-600">
                      <strong>Airline:</strong>{" "}
                      {flight.validatingAirlineCodes?.join(", ") || "N/A"}
                    </p>
                    <p className="text-gray-600">
                      <strong>Departure:</strong>{" "}
                      {flight.itineraries[0]?.segments[0]?.departure.at ||
                        "N/A"}
                    </p>
                    <p className="text-gray-600">
                      <strong>Arrival:</strong>{" "}
                      {flight.itineraries[0]?.segments[0]?.arrival.at || "N/A"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center">No results found.</p>
              )}
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={onClose}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
