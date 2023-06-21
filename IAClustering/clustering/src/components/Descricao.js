import {Box, Typography}from '@mui/material';

function Descricao(){
  return(
    <Box sx={{borderTop: '1px solid #1574B6', width:"800px", mt:"30px", textAlign:"center"}}>
            <Box sx={{mt:"10px"}}>
            <Typography variant="h6" gutterBottom>
                Descrição dos Campos
            </Typography>
            <Box sx={{textAlign:"left"}}>
              <li>Customer_Age (Idade do Cliente):</li>
              <p>
                Explicação: A idade do cliente pode ser um fator importante na segmentação, 
                pois diferentes faixas etárias têm necessidades, preferências e comportamentos 
                de compra distintos.
              </p>
              <p>
              Relevância: Pessoas em diferentes faixas etárias podem ter diferentes níveis de
                renda, prioridades e comportamentos de gastos. Isso pode influenciar seu valor 
                para o negócio, uma vez que grupos demográficos específicos podem ser mais propensos 
                a gastar mais ou menos com determinados produtos ou serviços.
              </p><br></br>


              <li>Total_Relationship_Count (Contagem Total de Relacionamentos):</li>
              <p>
                Explicação: Esse atributo indica a quantidade de 
                produtos e serviços que o cliente utiliza ou tem com a 
                instituição financeira.
              </p>
              <p>
                Relevância: Clientes com um maior número de relacionamentos podem ser 
                considerados de maior valor, pois estão mais engajados com a empresa e
                podem gerar mais receita através de múltiplas interações e serviços utilizados.
              </p><br></br>


              <li>Months_Inactive_12_mon (Meses de Inatividade nos últimos 12 meses):</li>
              <p>
                Explicação: Esse atributo indica por quantos meses o cliente esteve inativo 
                (sem interações ou transações) nos últimos 12 meses.
              </p>
              <p>
                Relevância: A inatividade de um cliente pode indicar falta de engajamento 
                recente com a instituição financeira. Clientes com menos meses de inatividade 
                podem ser considerados mais valiosos, pois estão mais ativamente envolvidos e 
                propensos a realizar transações ou interagir com a empresa.
              </p><br></br>

              <li>Credit_Limit (Limite de Crédito):</li>
              <p>
                Explicação: Esse atributo representa o limite de crédito atribuído 
                a um cliente pela instituição financeira.
              </p>
              <p>
                Relevância: O limite de crédito pode indicar o potencial de gastos 
                e a capacidade financeira do cliente. Clientes com limites de crédito 
                mais altos podem ser considerados de maior valor, uma vez que têm maior 
                capacidade de fazer compras ou assumir dívidas mais significativas.
              </p><br></br>

              <li>Total_Trans_Amt (Valor Total das Transações):</li>
              <p>
                Explicação: Esse atributo representa o valor total das transações 
                realizadas pelo cliente.
              </p>
              <p>
                Relevância: O valor total das transações pode indicar o nível de 
                atividade e o volume de gastos do cliente. Clientes com valores totais de
                transações mais altos podem ser considerados de maior valor, pois estão gerando 
                mais receita para a empresa.
              </p><br></br>

              <li>Avg_Utilization_Ratio (Razão Média de Utilização do Crédito):</li>
              <p>
                Explicação: Esse atributo representa a média da razão de utilização 
                do crédito pelo cliente.
              </p>
              <p>
              Relevância: A razão de utilização do crédito pode indicar o nível de 
              dependência do cliente em relação ao crédito disponível. Clientes com uma 
              média de utilização mais alta podem ser considerados de maior valor, uma
               vez que estão utilizando o crédito disponível e gerando receita para a empresa.
              </p><br></br>

              <p>
                Esses atributos foram selecionados com base na premissa de que eles 
                podem fornecer informações relevantes sobre o comportamento de compra, 
                o envolvimento com a instituição financeira e a capacidade financeira 
                dos clientes.
              </p><br></br>
            </Box>  
          </Box>
        </Box>
  );
}

export default Descricao;