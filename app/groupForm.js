/**
 * 
 * @author jskonst
 */
function groupForm() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
        model.qGroup.insert();
    }//GEN-LAST:event_button1ActionPerformed

    function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        model.qGroup.deleteRow();
    }//GEN-LAST:event_button2ActionPerformed

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        model.save();
    }//GEN-LAST:event_buttonActionPerformed
}
