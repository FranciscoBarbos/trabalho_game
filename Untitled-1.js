function NovoPersonagem(){ 
    NovaDiv = document.createElement("div");
    NovaDiv.innerHTML=
    ` <section id="personagem1" class="sectionBorda">
    <table class="tablePersonagem">
        <tr>
            <td>
                <input type="checkbox" name="chkIncluir"> Incluir este personagem na batalha
            </td>
            <td rowspan="3">
                <table>
                    <tr>
                        <td colspan="2"> Habilidades </td>
                    </tr>
                    <tr>
                        <td>
                            <table class="tableBorda">
                                <tr>
                                    <td>Força</td>
                                    <td><input type="number" nome="valorHabilidadeForca"></td>
                                </tr>
                                <tr>
                                    <td>Precisão</td>
                                    <td><input type="number" nome="valorHabilidadePrecisao"></td>
                                </tr>
                                <tr>
                                    <td>Velocidade</td>
                                    <td><input type="number" nome="valorHabilidadeVelocidade"></td>
                                </tr>
                                <tr>
                                    <td>Armadura</td>
                                    <td><input type="number" nome="valorHabilidadeArmadura"></td>
                                </tr>
                                <tr>
                                    <td>Recuperação</td>
                                    <td><input type="number" nome="valorHabilidadeRecuperacao"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input onclick="NovoPersonagem()" type="button" name="btnCriarPersonagem" value="Criar Personagem">
                        </td>
                    </tr> 
                </table>
            </td>
        </tr>							
        <tr>
            <td>
                Nome <input type="text" name="nomePersonagem">
            </td>
        </tr>
        <tr>
            <td>
                <table>
                    <tr>
                        <td colspan="2">
                            Nação
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table class="tableBorda">
                                <tr>
                                    <td>
                                        <input type="radio" name="rdNacao" value="A">Anão
                                    </td>
                                    <td>
                                        <input type="radio" name="rdNacao" value="EF">Elfo da Floresta
                                    </td>
                                </tr>
                                <tr>								
                                    <td>
                                        <input type="radio" name="rdNacao" value="H">Hobbit
                                    </td>								
                                    <td>
                                        <input type="radio" name="rdNacao" value="EL">Elfo de Lothlórien
                                    </td>																
                                </tr>
                                <tr>								
                                    <td>
                                        <input type="radio" name="rdNacao" value="CR">Cavaleiro de Rohan
                                    </td>								
                                    <td>
                                        <input type="radio" name="rdNacao" value="O">Orc Snaga
                                    </td>																
                                </tr>
                                <tr>								
                                    <td>
                                        <input type="radio" name="rdNacao" value="G">Guerreiro de Gondor
                                    </td>								
                                    <td>
                                        <input type="radio" name="rdNacao" value="U">Uruk-hai
                                    </td>																
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</section>`;
document.getElementById("personagens").append(NovaDiv);
console.log(NovaDiv);
}