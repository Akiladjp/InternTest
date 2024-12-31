import React from 'react'

export const StudentsInfo = () => {
  return (
    <div className='mt-12'>
        <table className='border-y border-gray-300'>
            <th className='flex gap-40 w-[100%] border-y border-gray-300 py-3'>
                <td className='ml-2'>Name</td>
                <td className=''>Date of Birth</td>
                <td className=''>Email</td>
                <td className='mr-2'>Telephone</td>
            </th>
            <tr>

            </tr>
        </table>
        <div className="flex justify-end mt-4">
            <button value="Submit" className="bg-[#1B91FF] text-white font-bold rounded-md py-2 px-6"> Submit </button>
        </div>
    </div>
  )
}
