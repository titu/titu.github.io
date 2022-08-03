import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import Carousel from './Carousel';

export default function ProjectDialog({
  showDialog,
  onClose,
  selectedProject
}) {
  const imagePath = '../assets/projects';
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);

  function closeModal() {
    onClose(false);
  }

  useEffect(() => {
    setIsOpen(showDialog);
  }, [showDialog]);

  useEffect(() => {
    selectedProject &&
      setImages(
        selectedProject.images.map(
          (image) => `${imagePath}/${selectedProject.imageDirName}/${image}`
        )
      );
  }, [selectedProject]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        {selectedProject && (
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="dialog-panel">
                  <div className="dialog-close" onClick={closeModal}>
                    X
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {selectedProject.title}
                  </Dialog.Title>
                  <div className="divide-y-2 divide-double space-y-4 divide-slate-700">
                    <div className="w-full flex justify-center">
                      <Carousel images={images} />
                    </div>
                    <div className="pt-2 font-semibold text-base">
                      {selectedProject.database && (
                        <div>
                          <div className="pt-2">Database</div>
                          <div className="font-light text-sm">
                            {selectedProject.database}
                          </div>
                        </div>
                      )}
                      {selectedProject.skills?.length && (
                        <div>
                          <div className="pt-2">Skills</div>
                          <div className="font-light text-sm">
                            <ul className="">
                              {selectedProject.skills.join(', ')}
                            </ul>
                          </div>
                        </div>
                      )}
                      {selectedProject.description && (
                        <div>
                          <div className="pt-2">Project description</div>
                          <div className="font-light text-sm">
                            {selectedProject.description}
                          </div>
                        </div>
                      )}
                      {selectedProject.role && (
                        <div>
                          <div className="pt-2">Role played</div>
                          <div className="font-light text-sm">
                            {selectedProject.role}
                          </div>
                        </div>
                      )}
                      {selectedProject.url && (
                        <div>
                          <div className="font-light text-sm pt-2">
                            <span className="font-semibold">Project URL: </span>
                            <a
                              href={selectedProject.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-800 hover:underline"
                            >
                              {selectedProject.url}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        )}
      </Dialog>
    </Transition>
  );
}
