"use client";

import dynamic from "next/dynamic";
import SectionHeader from "@/partials/dashboard/SectionHeader";
import { useTheme } from "@/context/themeContext";
import { MdDragIndicator } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

// Dynamically import to disable SSR
const DragDropContext = dynamic(() => import("@hello-pangea/dnd").then(mod => mod.DragDropContext), { ssr: false });
const Droppable = dynamic(() => import("@hello-pangea/dnd").then(mod => mod.Droppable), { ssr: false });
const Draggable = dynamic(() => import("@hello-pangea/dnd").then(mod => mod.Draggable), { ssr: false });

export default function CreateModels() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const [availableModels, setAvailableModels] = useState(["Posts", "Pages", "Authors", "Media", "Tags"]);
    const [droppedModels, setDroppedModels] = useState([]);

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        // Drag from sidebar -> dropzone
        if (source.droppableId === "sidebar" && destination.droppableId === "dropzone") {
            const newItem = availableModels[source.index];
            if (!droppedModels.includes(newItem)) {
                setDroppedModels((prev) => [...prev, newItem]);
                setAvailableModels((prev) => prev.filter((_, i) => i !== source.index));
            }
        }

        // Drag from dropzone -> sidebar (PUT BACK)
        if (source.droppableId === "dropzone" && destination.droppableId === "sidebar") {
            const restoredItem = droppedModels[source.index];
            setDroppedModels((prev) => prev.filter((_, i) => i !== source.index));
            setAvailableModels((prev) => [...prev, restoredItem]);
        }

        // Reorder inside dropzone
        if (source.droppableId === "dropzone" && destination.droppableId === "dropzone") {
            const items = Array.from(droppedModels);
            const [moved] = items.splice(source.index, 1);
            items.splice(destination.index, 0, moved);
            setDroppedModels(items);
        }
    };

    return (
        <SectionHeader sectionTitle="Schema" subSectionTitle="Create Models" btnLink="/dashboard/models/create">
            <form>
                <div className="d-flex align-items-center justify-content-end">
                    <button className="btn btn-primary border-radius-3px ">Save changes</button>
                </div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="row">
                        {/* LEFT COLUMN - DROP ZONE */}
                        <div className="col-12 col-md-7">
                            <Droppable droppableId="dropzone">
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`my-md-4 my-2 drag-zone rounded d-flex flex-column align-items-center ${
                                            droppedModels.length === 0 ? "justify-content-center" : "justify-content-start"
                                        } p-3 w-100`}
                                    >
                                        {droppedModels.length === 0 ? (
                                            <span className="text-secondary">Drop your models here</span>
                                        ) : (
                                            <div className="row w-100">
                                                {droppedModels.map((item, index) => (
                                                    <div key={item} className="col-12 col-md-6">
                                                        <Draggable draggableId={item} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className={`d-flex align-items-center gap-3 p-3 rounded mb-2 
                                                                        ${isDark ? "bg-card-dark text-white" : "bg-light text-dark"}`}
                                                                    style={{
                                                                        cursor: "grab",
                                                                        opacity: snapshot.isDragging ? 0.6 : 1, // Visible while dragging
                                                                        transform: snapshot.isDragging ? "scale(1.05)" : "scale(1)",
                                                                        ...provided.draggableProps.style
                                                                    }}
                                                                >
                                                                    <MdDragIndicator size={20} />
                                                                    <p className="mb-0 fw-semibold">{item}</p>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>

                        {/* RIGHT COLUMN - SIDEBAR MODELS */}
                        <div className="col-12 col-md-5">
                            <div className={`my-md-4 my-2 card border-0 p-4 ${isDark ? "bg-card-gray-800 text-white" : "bg-card-light-v2 text-dark"}`}>
                                <h5 className="d-block fw-semibold mb-1">Models</h5>
                                <p className="text-secondary text-small mb-3">Drag to add fields</p>

                                <Droppable droppableId="sidebar">
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.droppableProps}>
                                            {availableModels.map((title, index) => (
                                                <Draggable key={title} draggableId={title} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`d-flex align-items-center gap-3 p-3 rounded mb-2 
                                                                ${isDark ? "bg-card-dark text-white" : "bg-light text-dark"}`}
                                                            style={{
                                                                cursor: "grab",
                                                                opacity: snapshot.isDragging ? 0.6 : 1,
                                                                transform: snapshot.isDragging ? "scale(1.05)" : "scale(1)",
                                                                ...provided.draggableProps.style
                                                            }}
                                                        >
                                                            <MdDragIndicator size={20} />
                                                            <Image src="/images/blog.webp" alt="Icon" height={32} width={32} style={{ borderRadius: "4px" }} />
                                                            <p className="fw-medium mb-0 lh-sm">{title}</p>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </div>
                    </div>
                </DragDropContext>
            </form>
        </SectionHeader>
    );
}
