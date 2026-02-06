'use client';

import styled from 'styled-components';

const TableWrapper = styled.div`
  overflow-x: auto;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  th, td {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  }

  th {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    th, td {
      padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
      font-size: 14px;
    }
  }
`;

export default function PricingTable() {
    return (
        <TableWrapper>
            <Table>
                <thead>
                    <tr>
                        <th>Abonament</th>
                        <th>Ore incluse / lună</th>
                        <th>Potrivit pentru</th>
                        <th>Preț lunar*</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>ENTRY</strong></td>
                        <td>1 oră</td>
                        <td>Afaceri mici care modifică ocazional site-ul (texte, poze, informații de contact, program).</td>
                        <td><em>[de completat]</em></td>
                    </tr>
                    <tr>
                        <td><strong>MID</strong></td>
                        <td>2 ore</td>
                        <td>Afaceri care actualizează periodic servicii, prețuri, promoții sau adaugă conținut nou.</td>
                        <td><em>[de completat]</em></td>
                    </tr>
                    <tr>
                        <td><strong>BUSINESS</strong></td>
                        <td>4 ore</td>
                        <td>Afaceri cu campanii dese, landing page-uri simple, secțiuni noi sau modificări regulate de design.</td>
                        <td><em>[de completat]</em></td>
                    </tr>
                </tbody>
            </Table>
        </TableWrapper>
    );
}
