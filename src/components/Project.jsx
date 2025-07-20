
import Button from './generic/Button';
import { InformationCircleIcon, ChevronLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Project = ({name, summary, img = "", progress, link, tags, flipped, onFlip}) => {

    let has_img = img ? img : false
    console.log(has_img);
    
    return (
        <div className=''>
            {!flipped ? (
                <>
                    {has_img &&
                    <img src={`${import.meta.env.BASE_URL}images/${img}`} alt={name + " image"} className='rounded-t-xl'/>
                    }
                    <div className='flex flex-col justify-end'>
                        <div className="p-4">
                            <div className='flex flex-row justify-between'>
                                <h3 className='section-header-2 mb-2 text-2xl font-bold'>{name}</h3>
                                <Button onClick={onFlip} variant={"flat"} className='bg-gray-200 dark:bg-gray-700 rounded-full'>
                                    <InformationCircleIcon className="size-6" />
                                </Button>
                            </div>
                            <p className='mb-1'>{progress}</p>
                            <p><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline inline-flex items-center" 
                            href={link} target="_blank" rel="noopener noreferrer">
                                <span>See the live version here</span>
                                <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
                            </a></p>
                        </div>
                        <div className='flex flex-row pb-2'>
                            {tags.map(t => {
                                return (
                                    <span className='p-2 ml-2 bg-gray-200 dark:bg-gray-700 rounded-xl'>{t}</span>
                                )
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <div className="p-4">
                    <div className='flex flex-row justify-begin mb-2'>
                        <Button onClick={onFlip} variant={"flat"} className="bg-gray-200 dark:bg-gray-700 rounded-full">
                            <ChevronLeftIcon className="size-6" />
                        </Button>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className='mb-1'>{summary}</p>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Project