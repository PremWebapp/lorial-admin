import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CProgress, CProgressBar, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'
import { Table } from 'antd'

const VendorList = () => {
  const CompletedColumns = [
    {
      title: 'Logo',
      dataIndex: 'category_img',
      key: 'category_img',
      render: (text, record) => (
        <span>{(record.category_img ? <span> <img alt='Menu_image' src={record?.category_img} style={{ width: "30px", height: "30px", borderRadius: "25px" }} /> </span> : '')}</span>
      )
    },
    {
      title: 'Category Name',
      dataIndex: 'category_name',
      key: 'category_name',

    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text, record) => (
        <span>{(record.description ? <span>{htmlPerse(record.description)} </span> : '')}</span>
      )
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 3,
      },
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      sorter: {
        compare: (a, b) => a.rating - b.rating,
        multiple: 3,
      },
    },
    {
      title: 'Permitted',
      dataIndex: 'isPermitted',
      key: 'isPermitted',
      render: text => <span>{text === '0' ? 'No' : 'Yes'}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to='/dashbord/product/details' state={{ id: record.product_id }} >
            <i className="fa fa-eye p-2  rounded-circle " style={{ color: 'white', backgroundColor: '#1b6bcc' }} id={record.product_id} ></i>
          </Link>
          <span className="p-2  rounded-circle "></span><i className="fa fa-trash p-2  rounded-circle pointer" style={{ color: 'red', backgroundColor: '#1b6bcc' }} onClick={() => handleDelete(record.product_id)} id={record.product_id} ></i></span>
      )
    },
  ];
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Vendor</strong> <small>List</small>
            <div className="">
              <Table dataSource={''} columns={CompletedColumns} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['05', '10', '20', '30'] }} />
            </div>
          </CCardHeader>
        </CCard>
      </CCol>



{/* 

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Labels</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add labels to your progress bars by placing text within the{' '}
              <code>&lt;CProgressBar&gt;</code>.
            </p>
            <DocsExample href="components/progress#labels">
              <CProgress className="mb-3">
                <CProgressBar value={25}>25%</CProgressBar>
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Height</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              We only set a <code>height</code> value on the <code>&lt;CProgress&gt;</code>, so if
              you change that value the inner <code>&lt;CProgressBar&gt;</code> will automatically
              resize accordingly.
            </p>
            <DocsExample href="components/progress#height">
              <CProgress height={1} className="mb-3">
                <CProgressBar value={25}></CProgressBar>
              </CProgress>
              <CProgress height={20} className="mb-3">
                <CProgressBar value={25}></CProgressBar>
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Backgrounds</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Use <code>color</code> prop to change the appearance of individual progress bars.
            </p>
            <DocsExample href="components/progress#backgrounds">
              <CProgress className="mb-3">
                <CProgressBar color="success" value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Multiple bars</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Include multiple progress bars in a progress component if you need.
            </p>
            <DocsExample href="components/progress#multiple-bars">
              <CProgress className="mb-3">
                <CProgressBar value={15} />
                <CProgressBar color="success" value={30} />
                <CProgressBar color="info" value={20} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Striped</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>variant=&#34;striped&#34;</code> to any <code>&lt;CProgressBar&gt;</code> to
              apply a stripe via CSS gradient over the progress bar&#39;s background color.
            </p>
            <DocsExample href="components/progress#striped">
              <CProgress className="mb-3">
                <CProgressBar color="success" variant="striped" value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" variant="striped" value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" variant="striped" value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" variant="striped" value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Animated stripes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              The striped gradient can also be animated. Add <code>animated</code> property to{' '}
              <code>&lt;CProgressBar&gt;</code> to animate the stripes right to left via CSS3
              animations.
            </p>
            <DocsExample href="components/progress#animated-stripes">
              <CProgress className="mb-3">
                <CProgressBar color="success" variant="striped" animated value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" variant="striped" animated value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" variant="striped" animated value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" variant="striped" animated value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default VendorList
