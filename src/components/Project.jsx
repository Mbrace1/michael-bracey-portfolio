
import Button from './generic/Button';
import { InformationCircleIcon, ArrowTopRightOnSquareIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Project = ({name, summary, img = "", progress, link, tags, mobileSupport, flipped, onFlip}) => {

    return (
        <div className='flex flex-col'>
            {img &&
                <img src={`${import.meta.env.BASE_URL}images/${img}`} alt={`${name} project screenshot`} className='rounded-t-xl w-full object-cover' />
            }
            <div className='p-4'>
                {/* Title row with inline info toggle */}
                <div className='flex flex-row items-center justify-between mb-2'>
                    <h3 className='section-header-2 text-2xl font-bold'>{name}</h3>
                    <Button
                        variant='icon'
                        onClick={onFlip}
                        aria-pressed={flipped}
                        aria-label={flipped ? 'Hide project details' : 'Show project details'}
                    >
                        {flipped
                            ? <XMarkIcon className="size-6" />
                            : <InformationCircleIcon className="size-6" />
                        }
                    </Button>
                </div>

                {/* Flippable text area — image above stays visible */}
                <div className='perspective-[1000px]'>
                    <div className={`relative transition-transform duration-500 transform-3d ${flipped ? 'rotate-y-180' : ''}`}>
                        {/* Front: project details */}
                        <div className='backface-hidden'>
                            <p className='mb-1'>{progress}</p>
                            <p className='mb-1 flex flex-row items-center'>
                                <span>Works on mobile</span>
                                {mobileSupport
                                    ? <CheckIcon className="size-5 ml-2 text-green-500" />
                                    : <XMarkIcon className="size-5 ml-2 text-red-500" />
                                }
                            </p>
                            <p className='mb-3'>
                                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline inline-flex items-center"
                                    href={link} target="_blank" rel="noopener noreferrer">
                                    <span>See the live version here</span>
                                    <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
                                </a>
                            </p>
                            <div className='flex flex-row flex-wrap -ml-2'>
                                {tags.map((t, idx) => (
                                    <span key={idx} className='p-2 ml-2 mb-1 bg-gray-200 dark:bg-gray-700 rounded-xl'>{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Back: summary */}
                        <div className='absolute inset-0 rotate-y-180 backface-hidden flex items-center justify-center text-center overflow-y-auto'>
                            <p className='text-base'>{summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
